require 'sinatra'

get '/' do
  p 'hi'
  File.read(File.join('public', 'index.html'))
end