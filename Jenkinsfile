
pipeline {
    /* 'agent any' tells Jenkins to run this on your 
       configured Windows build node.
    */
    agent any

    // Task 2: Define a string parameter named MESSAGE
    parameters {
        string(name: 'MESSAGE', defaultValue: 'Hello from the Pipeline', description: 'Enter a custom message to display')
    }

    stages {
        stage('Task 1: Checkout Source') {
            steps {
                /* Task 1: This command tells Jenkins to look at the 
                   GitHub repo configured in the job settings and pull the code.
                */
                checkout scm
                echo "Source code has been successfully synchronized from GitHub."
            }
        }

        stage('Task 2: Handle Parameter') {
            steps {
                // Task 2: Print the parameter value in the console output
                echo "The parameter MESSAGE value is: ${params.MESSAGE}"
            }
        }

        stage('Task 3: Execute BAT Command') {
            steps {
                // Task 3: Execute a simple Windows batch command (BAT)
                bat "echo Hello from Jenkins"
            }
        }
    }
}
