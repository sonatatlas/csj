
import requests 
from lxml import etree

s = requests.Session()

res = s.get('https://www.zhangmen.com')
html = etree.HTML(res.text)
imgs= html.xpath('//img//@src')

urls=open('usls','w')
urls.write(str(imgs))
