wget
====

## Create an offline 'backup':
    wget --recursive --no-parent --page-requisites --no-clobber --convert-links --force-html --adjust-extension --span-hosts --domains=EXAMPLE.NL,STATIC.EXAMPLE.NL http://EXAMPLE.NL

## 'Spider' a website, to create a sitemap list of urls:
    wget --spider --force-html -r -l2 http://EXAMPLE.COM 2>&1 | grep '^--' | awk '{ print $3 }' | grep -v '\.\(css\|js\|png\|gif\|jpg\)$' > urls.txt
