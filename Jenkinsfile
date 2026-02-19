pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Print Git Info') {
            steps {
                // GIT_COMMIT is automatically available after the checkout stage
                echo "Current Git Commit ID: ${env.GIT_COMMIT}"
            }
        }
    }
    post {
        always {
            // currentBuild.currentResult tracks if the job was SUCCESS or FAILURE
            echo "Final Build Result: ${currentBuild.currentResult}"
        }
    }
}