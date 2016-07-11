# CloudFormation Distro

The CloudFormation distro is a curated list of templates that work right out the box to create stacks that either exemplify a certain AWS feature or create meaningful service such as Solr Cloud. Creating a way for people to share and collaborate on templates vastly expands the potential of the CloudFormation product. CF happens to be a very powerful tool but with every powerful tool comes complexity. Prevent reinventing the wheel by contributing your working CF templates to this repo.

The repo is made to work in conjuction with [Cfsh](https://github.com/svolpe43/cfsh), a tool to traverse and analyze CloudFormed resources.

### TODO
* Allow cf_distro to be seamlessly integrated into Cfsh and implement commands such as 'apt-get SolrCloud'.
* Allow Cfsh to use the parameters file so users can change parameters without going into the templates themselves.
