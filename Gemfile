source 'https://rubygems.org'

ruby "2.3.0"

gem 'rails', '4.2.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'devise'
gem 'will_paginate', '~> 3.0.6'
gem 'will_paginate-bootstrap'

group :production do
  gem 'pg'
  gem 'rails_12factor'
end

group :development, :test do
  gem 'sqlite3'

  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  gem 'spring'
end

group :development do
  gem 'annotate'
end

group :assets do
  gem 'therubyracer'
  gem 'sass-rails', '~> 5.0'
  gem 'uglifier'
end
