pipeline {
  agent any
  options {
        // Timeout counter starts AFTER agent is allocated
        timeout(time: 1, unit: 'SECONDS')
    }
    
  tools {nodejs "NodeJS"}
    
  stages { 
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm start'
         sh 'echo "application started"'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
