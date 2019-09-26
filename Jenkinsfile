pipeline {
        agent any
        stages {
           stage('check build env') {
                steps {
                    tool 'nodejs@8.11.2'
                    
                    script {
                        def nodeHome = tool name: 'nodejs@8.11.2', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                        env.PATH = "${nodeHome}/bin:${env.PATH}"
                        env.SECRECT_KEY = "dev"
                    }
                    sh "node -v"
                    sh "npm -v" 
                }
            }
    
            stage('Stage Setup') {
                steps {
                    sh "npm install"  
                }
            }
            stage('Set version && deploy env') {
                steps {
                    script {
                        // if (env.GIT_BRANCH == 'master') {
                        //     env.REPO_TYPE = "releases"
                        //     env.CLASSIFIER = ""
                        //     env.SECRECT_KEY = "prod"
                        //     env.PUBLIC_URL = env.PREPROD_PUBLIC_URL
                        // } else {
                        //     env.REPO_TYPE = "snapshots"
                        //     env.CLASSIFIER = "-SNAPSHOT"
                        //     env.PUBLIC_URL = env.REC_PUBLIC_URL
                        // }

                        env.REPO_TYPE = "snapshots"
                        env.CLASSIFIER = "-SNAPSHOT"
                        env.PUBLIC_URL = env.REC_PUBLIC_URL

                        env.PROJECT_VERSION = sh(returnStdout: true, script: 'npm run get-version --silent')
                        env.PROJECT_VERSION = env.PROJECT_VERSION.trim()
                    }  
                }
            }
            // stage('Stage Test') {
            //     steps {
            //         sh "npm test"
            //     }
            // }
                
            stage('Stage Build') {
                steps {
                    sh "PUBCLIC_PATH=/dimapp/ npm run build"
                    sh "npm run archiver"
                }
            }
            stage('Stage Deploy to nexus') {
                steps {
                    sh "npm run deployer"
                }
            }
           
            stage('Recette') {
                // when{
                //    expression { env.GIT_BRANCH != "master" }
                // }
                steps {
                    echo 'Deploy dimapp To envrionnement : rec'
                    echo "version : ${PROJECT_VERSION}${CLASSIFIER}"
                    
                    sh '''ssh -T -o StrictHostKeyChecking=no root@192.168.1.87  << EOF
                        cd /etc/ansible
                        
                        if [ ! -d "deploy" ] ; then
                            git clone "git@gitlab.wafaassurance.co.ma:digitale/config/ansible.git" "deploy"
                    
                            cd deploy
                        else
                            cd deploy
                            git pull 
                        fi
                    
                        cd /etc/ansible/deploy
                    
                        echo 'Deploy dimapp To envrionnement : rec , repo_types : snapshots'
                        ansible-playbook -i inventory/rec/inventory -s app/dimapp/site.yml  --extra-vars mvn_version="${PROJECT_VERSION}${CLASSIFIER}"
                        exit
                    EOF'''
                }
            }
        }
    }