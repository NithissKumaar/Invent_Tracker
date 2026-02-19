pipeline {
    agent any
    parameters {
        string(name: 'VERSION', defaultValue: '1.0.0', description: 'Enter Build Version')
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Create Version File') {
            steps {
                // writeFile works natively on Windows without needing 'bat'
                writeFile file: 'version.txt', text: "Version Value: ${params.VERSION}"
                echo "Successfully created version.txt with value: ${params.VERSION}"
            }
        }
    }
}