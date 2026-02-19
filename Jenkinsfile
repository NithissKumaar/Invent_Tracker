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
                // 'set' is the Windows equivalent of 'printenv'
                bat 'set'
            }
        }
        stage('Custom Message') {
            steps {
                echo "Running Job: ${env.JOB_NAME}"
                echo "Build Number: ${env.BUILD_ID}"
            }
        }
    }
}