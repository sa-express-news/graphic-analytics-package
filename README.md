## What is this?

This is a tool for tracking and attaching analytics to ExpressNews.com graphics. It tracks every time a reader's cursor passes over a graphic and it provides A/B testing by allowing us to specify a certain percentage of readers that won't see a graphic. Thus, we can test 
if those who do see the graphic are spending more time on our pages.

This is in no way an all encompassing evaluation of the value of our graphics and interactives. It should be kept in mind that many graphics (bar charts, line charts), when done right, should be easy to digest and, in turn, shouldn't increase time on page. With this in mind, a process should be put in place for testing if easy to digest graphics add value as static images used on the homepage and on social networks.

## How do I use this?

There are two parts to this process, adding the tracker to the WCM and reading the results on Google Analytics.

### Adding the tracker to WCM

Whether you intend to embed your graphic as a freeform of through the new 'embed' option, the steps are the same:

Take all of your embedded content (and for example's sake, lets say it's a TimelineJS iframe: `<iframe src="http://path/to/file.html"></iframe>`) and wrap it into a div with the id `saen-graphic-container`. Above or below this div, add an empty div with id `saen-analytics-container`. Specifically, using the iframe example above, this is what your code should look like:

```
<div id="saen-analytics-container"></div>
<div id="saen-graphic-container">
    <iframe src="http://path/to/file.html"></iframe>
</div>
```

Below these divs, you'll need to instantiate the tracker. This is done by adding code like this:

```
<script src="https://s3.amazonaws.com/graphics.expressnews.com/analytics/saen-analytics-object.js"></script>
<script>
    window.buildExpressNewsAnalyticsObject('TimelineJS', 'timeline', 20);
</script>
```

The important line in this block of code is: `window.buildExpressNewsAnalyticsObject('TimelineJS', 'timeline', 20);`. Each of these three statments – `'TimelineJS'`, `'timeline'` and `20` – need to be customized for each embed. Lets walk through them one by one:

 1. `'TimelineJS`': Here you need to specify what tool you used to build the graphic. Thus it could be `'Infogr.am'`, `'ArcGIS Story Map'`, `'Storify'` etc. The important thing is to make sure it is in quotes: `''`.
 2. `'timeline'`: Here you specify the type of graphic. Eg: `'bar chart'`, `'line chart'`, `'card stack'`, `'map'`, etc. Again, it's very improtan to make sure the word is in quotes: `''`.
 3. 20: This is the percent of readers you *don't* want to see the graphic. It can be anything from `0` to `100`. Unlike the above two statements this one should *not* be in quotes.

And thats it! In full, our example code would look like this:

```
<div id="saen-analytics-container"></div>
<div id="saen-graphic-container">
    <iframe src="http://path/to/file.html"></iframe>
</div>

<script src="https://s3.amazonaws.com/graphics.expressnews.com/analytics/saen-analytics-object.js"></script>
<script>
    window.buildExpressNewsAnalyticsObject('TimelineJS', 'timeline', 20);
</script>
```

Or, for more examples, let say it was an Infogr.am bar chart. That might look something like this:

```
<div id="saen-analytics-container"></div>
<div id="saen-graphic-container">
    <div class="infogram-embed" data-id="federal_firearms_licensees_by_state" data-type="interactive" data-title="Federal firearms licensees by state"></div><script>!function(e,t,s,i){var n="InfogramEmbeds",o=e.getElementsByTagName("script"),d=o[0],r=/^http:/.test(e.location)?"http:":"https:";if(/^\/{2}/.test(i)&&(i=r+i),window[n]&&window[n].initialized)window[n].process&&window[n].process();else if(!e.getElementById(s)){var a=e.createElement("script");a.async=1,a.id=s,a.src=i,d.parentNode.insertBefore(a,d)}}(document,0,"infogram-async","//e.infogr.am/js/dist/embed-loader-min.js");</script>
</div>

<script src="https://s3.amazonaws.com/graphics.expressnews.com/analytics/saen-analytics-object.js"></script>
<script>
    window.buildExpressNewsAnalyticsObject('Infogr.am', 'bar chart', 10);
</script>
```

### Viewing the analytics

The analytics are tracked in Google Analytics under the `saenpremiumeditors@gmail.com` account.

Head to `https://analytics.google.com` and log in. From there click on `CUSTOMIZATION` and then `Dashboards`.

On the Dashboards screen, select the `Graphics Dashboard`. All of our graphic analytics are contained here.
