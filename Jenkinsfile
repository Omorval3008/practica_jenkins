pipeline {
    agent any

    triggers {
        githubPush() 
    }
    
    environment {
        GITHUB_WEBHOOK_TOKEN = credentials('token_secreto') 
    }
    
    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'master', 
                    url: 'https://github.com/Omorval3008/practica_jenkins.git', 
                    credentialsId: '3ab3792f-06b2-46e2-97b0-fd0fd96112bf'
            }
        }

        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Compilar React') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Desplegar en Apache') {
            steps {
                sh 'sudo rm -rf /var/www/html/*'
                sh 'sudo cp -r build/* /var/www/html/'
            }
        }
    }
}

