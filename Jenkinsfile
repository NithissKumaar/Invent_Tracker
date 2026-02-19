pipeline {
    agent any

    // Task 2: Accept USERNAME parameter from user
    parameters {
        string(name: 'USERNAME', defaultValue: 'Guest_Dev', description: 'Enter your name for the deployment log')
    }

    stages {
        stage('Task 1: Latest Version Checkout') {
            steps {
                // Pulls the latest code including this updated Jenkinsfile
                checkout scm
                echo "Latest version retrieved from GitHub."
            }
        }

        stage('Task 3: Create and Store User Data') {
            steps {
                /* Task 3: Create user.txt and store the username.
                   We use the variable ${params.USERNAME} inside the BAT command.
                */
                echo "Storing deployer information..."
                bat "echo ${params.USERNAME} > user.txt"
                
                // Verification: Display the file content to the console
                echo "Content of user.txt:"
                bat "type user.txt"
            }
        }
    }
}