require "time"
require "tzinfo"
ENV["TZ"] = "Asia/Bangkok"
th = TZInfo::Timezone.get("Asia/Bangkok")
p th
th = TZInfo::Country.get("TH")
p th
# Time.zone = "Asia/Bangkok"
