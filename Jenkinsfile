pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Print Env Variables') {
            steps {
                sh 'printenv' // Use 'bat set' if on Windows
            }
        }
        stage('Custom Message') {
            steps {
                echo "Running Job: ${env.JOB_NAME} - Build # ${env.BUILD_ID}"
            }
        }
    }
}