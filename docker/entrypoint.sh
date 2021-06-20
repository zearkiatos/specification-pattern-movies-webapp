if [ $(echo "$NODE_ENV")=="develop" ]
then
    unset MOVIES_API_BASE_URL
    export MOVIES_API_BASE_URL=http://localhost:8080/
    npm install -g @angular/cli
    ng serve --host=0.0.0.0 --port=8000 --live-reload
else
    npm run build
    npm run start
fi

echo "`date`: 🤖 All ready boss!"