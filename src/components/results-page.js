import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { searchBox, hits, pagination, refinementList, queryRuleCustomData, toggleRefinement, numericMenu } from 'instantsearch.js/es/widgets';
import { createInsightsMiddleware } from 'instantsearch.js/es/middlewares'

import resultHit from '../templates/result-hit';

/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page
 */
class ResultPage {
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
    );

    this._searchInstance = instantsearch({
      indexName: process.env.ALGOLIA_INDEX,
      searchClient: this._searchClient,
    });

// Middleware for analytics tracking

    const insightsMiddleware = createInsightsMiddleware({
      insightsClient: aa,
    })

    this._searchInstance.use(insightsMiddleware)

    aa('setUserToken', 'myUserToken')

  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#hits',
        templates: {
          item:resultHit,
        },
      }),
      pagination({
        container: '#pagination',
      }),
      refinementList({
        container: '#brand-facet',
        attribute: 'brand',
      }),
      refinementList({
        container: '#categories-facet',
        attribute: 'categories',
      }),
      toggleRefinement({
        container: '#shipping-facet',
        attribute: 'free_shipping',
        templates: {
        labelText: 'Free shipping',
        }
      }),
      refinementList({
        container: '#price_range-facet',
        attribute: 'price_range',
      }),
      queryRuleCustomData({
            container: '#banner',
            templates: {
              default: `
                {{#items}}
                  <div><h1>{{promo_content}}</h1></div>
                {{/items}}
              `,
            },
          })
    ]);

  }



  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default ResultPage;
