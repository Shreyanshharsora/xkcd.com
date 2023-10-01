pipeline {
    
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
