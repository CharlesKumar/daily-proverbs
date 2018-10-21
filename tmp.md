npm init -y

npm i -D parcel-bundler pug sass

npm i -D parcel-bundler pug sass parcel-plugin-bundle-visualiser
npm i -D parcel-bundler pug sass parcel-plugin-eslint

npm i typesettings include-media stickybits

mkdir -p lib src && cd src

<!-- mkdir -p assets components views sass -->

(does parcel-bundler has any forcing folder structure (like assets) - actually no)

mkdir -p img templates sass js php

cd templates

mkdir -p includes layouts && touch index.pug contact.pug about.pug service.pug gallery.pug
cd includes && touch _head.pug _foot.pug _main_nav.pug _fscripts.pug _hscripts.pug _banner.pug                          mderror_

touch app.js (or cd js && touch main.js)

cd sass

mkdir -p partials vendor && touch style.scss
touch _base.scss _nav.scss _variables.scss _mixins.scss _function.scss _helpers.scss _effects.scss                            mderror_

______________________________________________________________

parcel src/templates/index.pug

parcel build src/templates/index.pug

Parcel (v1.7.0 and above) supports multiple module resolution strategies out of the box so you don't have to deal with endless relative paths ../../.

--------------------------------------------------------------

for filename in ./*.jpg; do
    for ((i=0; i<=3; i++)); do
        convert "$filename" -quality 35 "$filename"
    done
done                                                                                            mderror*


