pipeline {
    agent any

    triggers {
        pollSCM('* * * * *') // Va a estar mirando cada minuto si han surgido (o no)
        //cambios en el repo para sincronizalos
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
            	//especifico mi repo, solucionado nombre rama al correcto
                git branch: 'master', url: 'https://github.com/Omorval3008/practica_jenkins.git'
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

