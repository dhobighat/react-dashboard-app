pipeline {
  agent any
  stages {
     stage('NPM Install') {
        steps {
            bat 'npm install'
          }
     }
     stage('NPM Build') {
        steps {
            bat 'npm run build'
        }
    }
    stage('Pushing to S3') {
        steps {
            bat 'aws s3 cp ./build s3://aws-dev-dashboard --recursive'
        }
    }
  }
  post {
      always {
         cleanWs()
      }
  }
}