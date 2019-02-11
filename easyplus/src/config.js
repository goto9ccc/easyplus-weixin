const ENV = '/* @echo ENV */' || 'development'

const config = {
  ENV,
  apiUrlPrefix: ENV === 'production' ? 'https://正式域名带HTTPS/api/wx/' : 'http://dev.tooeye.cn:5000/api/wx',
  webappurl: ENV === 'production' ? 'https://正式域名带HTTP/' : 'http://dev.tooeye.cn:5000/'
}

export default config
