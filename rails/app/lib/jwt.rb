require "jwt"

module Jwt
  def self.secret
    Rails.application.secrets.secret_key_base
  end
  def self.encode(data)
    JWT.encode data, secret, "HS256"
  end
  def self.decode(token)
    payload, _header = JWT.decode token, secret, "HS256"
    payload
  end

end
