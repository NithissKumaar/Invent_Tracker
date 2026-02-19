pipeline {
    agent any

    parameters {
        string(name: 'MESSAGE', defaultValue: 'Version 2 active', description: 'Verification message')
    }

    stages {
        stage('Task 1: Checkout Updated Code') {
            steps {
                // This pulls the changes you just pushed from your IDE
                checkout scm
                echo "Successfully pulled the latest commit from GitHub."
            }
        }

        stage('Task 2: System Date') {
            steps {
                // Task 2: Execute Windows BAT command to show system date
                echo "Fetching current system date..."
                bat "date /t"
            }
        }

        stage('Task 3: Verify Parameter') {
            steps {
                // Task 3: Print the parameter again to ensure it persists
                echo "The parameter value is still: ${params.MESSAGE}"
            }
        }
    }
}
