from __future__ import with_statement
from fabric.api import *
from fabric.contrib.console import confirm

env.hosts = ['yaozhifeng@yaozhifeng.net']

def preview():
    local("liquidluck build")
    local("liquidluck server")

def deploy():
    local("git push")
    code_path = '/home/yaozhifeng/yaozhifeng.net/neil-blog'
    with cd(code_path):
        run("git pull")
        
        with prefix('source /home/yaozhifeng/.bashrc && pythonbrew switch 2.7.3 && source /home/yaozhifeng/py_env/bin/activate'):
            run("liquidluck build")
