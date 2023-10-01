pipeline {
  agent any
    
  tools {NodeJS "NodeJs 20.8.0"}
    
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh '<<Build Command>>'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }

