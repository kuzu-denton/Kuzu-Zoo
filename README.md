
# Kuzu Zoo

## Running

To run, checkout the (two repo install)[http://docs.vulcanjs.org/#Two-Repo-Install-Optional] from vulcan 

### Technologies

This uses React, material ui, and graphql as well as the vulcan framework which is based off meteor.  The old producer Kuzu app was getting stale and it's time to give it a facelift using newer technolgies!

### TODO Data Structure

    - Naming conventions for collections 
    As the original kuzu was built from the ground up to meet producers needs, some of the naming conventions are not intuitive or downright misleading.  If we can agree on naming conventions for already existing features in the old producer app, there will be less confusion to contribute code as well as learning curve for people who use the app.

    - Split tracks to make them searchable
    In the original producer app, you had to enter in track info each time instead of being able to search the kuzu database for the existing tracks.  We need to split the tracks into a track meta data and track play information collections.

    - Shows can import autodj information or producer shows
    Right now, there is no way to import the AutoDj show information into the kuzu database.

