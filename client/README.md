## Git Workflow

Based on [MojoTech Git Workflow](http://blog.mojotech.com/mojotech-git-workflow/)

### Branching

The master branch should be considered the "always working" branch and will be the main place feature branches are merged into when they have been code reviewed and approved.

Working with, merging, updating, and deleting branches is trivial, cheap and easy. As such, developers are encouraged to create branches at will as they work on various features, bugs, and tinkering. Feel free to create branches as often as desired, and work out of those feature branches in your normal daily workflow.

Developers should never directly commit to the master branch if possible. Instead, always follow the normal process of:

* Create a feature branch off of master
* Make changes to implement the feature
* Submit a new Pull Request for those changes
* Have those changes peer code reviewed
* After approval, merge the Pull Request into the master branch

### Naming

New feature branches typically should be created from an up-to-date master branch:

```
$ git checkout master
$ git pull
$ git checkout -b <new_branch_name>
```

To keep some form of consistency and legibility among open branches, developers should name their branches in the following format: <initials>/<short_description>.

Some examples follow:

```
$ git checkout -b bf/add-metrics-tracking
$ git checkout -b bf/fix-remember-me-input
$ git checkout -b bf/update-login-endpoint
```

This naming structure allows all developers to easily see which developer "owns" or created a particular branch, as well as gives general insight into what code changes live in that branch. Some developers also like to include the Pivotal Tracker ticket number in their branch name.

```
$ git checkout -b bf/add-reset-passwor-feature-12345
```

### Rebasing

As engineers work on a feature branch, changes from other developers will most likely be merged into the master branch during that time. Developers should get in the habit of semi-frequently pulling down the latest changes to origin/master to their local master branch, and then rebasing their feature branch off of the latest changes to stay up-to-date.

In simple terms, a git rebase master from a feature branch, will unwind the local commits made on the feature branch, update the root of the feature branch with the commits pulled down from master, and then re-apply the local commits from the feature branch on top.

### Commits

Git commits, like branches, are also cheap and easy to make. As such, developers should get into the habit of creating frequent commits along the way, instead of making one huge "big-bang commit" at the end of a feature's development cycle.

Git commits should be kept atomic, which means each commit should be self-contained, related, and fully-functional revolving around a single task or fix.

Git commit messages should contain a shorter, succinct first line, followed by a single blank line, then any additional supporting descriptive paragraphs as desired.

Here is an example of a single line commit message:

```
Update the ASSET_HOST environment variable
```

Here is an example of a more lengthy descriptive commit message:

```
Fix regression bug with Remember Me feature

There was a bug ticket filed here #TK134AFKR where a user was unable to "uncheck" the Remember Me checkbox on the login screen while.
```

### Pull Requests

Before submitting a PR, the developer should rebase their feature branch against master to get the current changes at the time.

All developers on the project should **actively** participate in peer code review of open Pull Requests. Developers are encouraged to leave specific comments and questions on changes, logic flow, business requirements, etc... related to the PR's code.

When code review is complete, and the developer team signs-off on approval of the code, and the code passes any required test suites, the PR request will be merged into the master branch, and the PR will be formally "closed" at that time.
