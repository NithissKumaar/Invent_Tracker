pipeline {
    agent any
    environment {
        MY_STEP_VAR = "Experiment-6-Task-2"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Print Custom Env') {
            steps {
                // In Windows BAT, variables are wrapped in % signs
                bat "echo The custom variable is: %MY_STEP_VAR%"
            }
        }
    }
}