pipeline {
    agent any

    triggers {
        githubPush() 
        /*
        Especifica que tipo de trigger es el que va a ejecutar el despliege
        
        En este caso hemos elegido githubPush ya que el ejercicio pide que solo se despliege
        la app de nuevo cuando hagamos un push al repo
        */
    }
    
    environment {
        GITHUB_WEBHOOK_TOKEN = credentials('token_secreto') 
        
        /*
        En environment podemos guardar variables de entorno con valores sensibles
        (parecido al .env que usamos en docker para las variables sensibles)
        En este caso guardamos el valor de nuestro token.
        */
    }
    
    stages {
    /*Stages nos permite dividir nuestro despliege en varias secciones*/
        stage('Clonacion del repo de git') {
            steps {
                git branch: 'master', 
                    url: 'https://github.com/Omorval3008/practica_jenkins.git'
                /*COmo nuestro repo es público, no hace falta especificar credenciales de usuario*/
            }
        }

        stage('Instalación de las dependencias de react') {
            steps {
            /*Cuando ya se haya clonado el repo, instalamos sus dependencias*/
                sh 'npm install'
            }
        }

        stage('compilación de la app de React') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Desplegar en Apache') {
            steps {
            /*
            Por último, copiamos los archivos de la build en la carpeta donde se aloja nuestra web en 			
            apache
            */
                sh 'sudo rm -rf /var/www/html/*'
                sh 'sudo cp -r build/* /var/www/html/'
            }
        }
    }
}

