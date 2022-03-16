

import algoliasearch from 'algoliasearch';
const client = algoliasearch('8OZ9VW6NUV', '6aa711c926323382cb379f3212bb187e');
const index = client.initIndex('SpencerWilliams_dataset');


index.setSettings({'customRanking': ['desc(popularity)','desc(rating)']}).then(() => {
  // done
});

index.getSettings().then(settings => {
  console.log(settings);
});
