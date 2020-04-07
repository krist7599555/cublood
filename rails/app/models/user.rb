class User
  # include ActiveModel::Validations
  include ActiveModel::Model
  include ActiveModel::Serialization
  include RethinkDB::Shortcuts

  attr_accessor :id, :email, :password, :password_confirm,
                :phone, :address, :name, :surname, :nickname, :gender,
                :shirt, :weight, :status, :nationality, :academic,
                :student_id, :faculty, :medical_condition, :is_donated,
                :is_enrolled, :blood_type, :birth, :rh

  validates :email,             presence: true 
  validates :password,          presence: true, length: { in: 6..30 }
  validates :phone,             format: { with: /\A\d{10}\z/, message: "fill in 10 digit number only" }
  validates :address,           presence: true, length: { minimum: 10 }
  validates :name,              presence: true
  validates :surname,           presence: true
  validates :nickname,          presence: true
  validates :gender,            presence: true, inclusion: {:in => %w(male female)}
  validates :shirt,             presence: true, numericality: { only_integer: true }, inclusion: { in: 30..100, message: 'shirt should be in 36..48' }
  validates :weight,            presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 45, message: "need weight > 45" }
  validates :status,            presence: true, inclusion: {:in => %w(nisit teacher staff alumni)}
  validates :nationality,       presence: true, inclusion: {:in => %w(thai foreign)}
  validates :academic,          presence: true, inclusion: {:in => %w(1 2 3 4 5 6 master docter)}
  validates :student_id,        presence: true, format: { with: /\A\d{10}\z/, message: "need 10 digit only without space" }
  validates :faculty,           presence: true, numericality: { only_integer: true }, inclusion: { in: 20..100, message: 'faculty might not exist' }
  validates :is_donated,        inclusion: { in: [ true, false ] }
  validates :is_enrolled,       inclusion: { in: [ true, false ] }
  validates :blood_type,        presence: true, inclusion: { in: %w(A B O AB), message: "must be A B O AB"}
  validates :rh,                presence: true, inclusion: { in: %w(+ - notsure), message: "must + - notsure"}
  validates :birth,             presence: true, type: { type: :time, message: "birth need to be type time" }
  validates :medical_condition, presence: true
  validate  :password_eq_password_confirm
  validate  :birth_data_format
  validate  :email_unique
  validate  :phone_unique

  def password_eq_password_confirm
    errors.add(:password_confirm, "password not same as confirm password") if @password != @password_confirm
  end
  def birth_data_format
    errors.add(:birth, "too young, require age > 17") if @birth + 15.year > Time.now
    errors.add(:birth, "too old, require age < 70") if @birth + 69.year < Time.now
  end

  def email_unique
    errors.add(:email, "this email already used") if r.table('users').filter(email: @email).count().ne(0).run
  end
  def phone_unique
    errors.add(:phone, "this phone already used") if r.table('users').filter(phone: @phone).count().ne(0).run
  end

  def attributes
    {
      "id"               => nil,
      "email"            => nil,
      "phone"            => nil,
      "address"          => nil,
      "name"             => nil,
      "surname"          => nil,
      "nickname"         => nil,
      "gender"           => nil,
      "shirt"            => nil,
      "weight"           => nil,
      "status"           => nil,
      "nationality"      => nil,
      "academic"         => nil,
      "student_id"       => nil,
      "faculty"          => nil,
      "medical_condition"=> nil,
      "is_donated"       => nil,
      "is_enrolled"      => nil,
      "blood_type"       => nil,
      "birth"            => nil,
    }
  end

  def to_hash
    self.serializable_hash
  end

  def save
    r.table('users').insert(
      self.to_hash.except("id", :id), 
      return_changes: true, 
      conflict: "error"
    ).run["generated_keys"][0]
  end

  def self.all
    r.table('users').run
  end

  def self.where(args)
    []
  end

  def self.find_by(args)
    if args.members? :id
      r.table('users').get(args[:id]).run
    else
      r.table('users').filter(args).nth(1).run
    end
  end

end
