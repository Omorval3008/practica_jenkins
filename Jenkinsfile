pipeline {
    agent any

    triggers {
        pollSCM('* * * * *') // Verifica cambios en GitHub cada minuto
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/Omorval3008/practica_jenkins.git'
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

