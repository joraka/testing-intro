## 2. Version Control Systems (git, GitHub)

Delete directory:
```bash
    rm demo
```

Exit from git log list just press 'q' key.

'HEAD' -> our current position (checkout) 
main -> local repository
origin/main -> remote repository

```bash
    #  send updates from local to remote repo
    git push
    #  send updates from remote to local repo
    git pull
```

```bash
    # list all local branches
    git branch

    # create new branch
    git branch some_branch_name

    # create new branch and checkout
    git checkout -b some_branch_name
```


```bash
    # switch branch
    git checkout branch_name

    # switch (checkout) to any commit
    git checkout commit_id
```

