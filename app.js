/*
 * script route generated by KOMA
 * @author : Yan Yan Purdiansah
 */
var express = require('express');
var session = require('express-session');
var device = require('express-device');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var createError = require('http-errors');

var indexRouter = require('./routes/index');
var searchMsbAccount = require('./routes/searchMsbAccount');
var searchMsbAffiliation = require('./routes/searchMsbAffiliation');
var searchMsbAuthorities = require('./routes/searchMsbAuthorities');
var searchMsbMenus = require('./routes/searchMsbMenus');
var searchMsbMucaffiliation = require('./routes/searchMsbMucaffiliation');
var searchMsbMucmember = require('./routes/searchMsbMucmember');
var searchMsbMucroom = require('./routes/searchMsbMucroom');
var searchMsbMucroomprop = require('./routes/searchMsbMucroomprop');
var searchMsbMucservice = require('./routes/searchMsbMucservice');
var searchMsbMucserviceprop = require('./routes/searchMsbMucserviceprop');
var searchMsbOffline = require('./routes/searchMsbOffline');
var searchMsbPersistentLogins = require('./routes/searchMsbPersistentLogins');
var searchMsbPresence = require('./routes/searchMsbPresence');
var searchMsbProperty = require('./routes/searchMsbProperty');
var searchMsbPubsub = require('./routes/searchMsbPubsub');
var searchMsbPubsubaffiliation = require('./routes/searchMsbPubsubaffiliation');
var searchMsbPubsubitem = require('./routes/searchMsbPubsubitem');
var searchMsbPubsubnode = require('./routes/searchMsbPubsubnode');
var searchMsbPubsubnodegroups = require('./routes/searchMsbPubsubnodegroups');
var searchMsbPubsubsubscriber = require('./routes/searchMsbPubsubsubscriber');
var searchMsbPubsubsubscription = require('./routes/searchMsbPubsubsubscription');
var searchMsbRemoteserver = require('./routes/searchMsbRemoteserver');
var searchMsbRevenue = require('./routes/searchMsbRevenue');
var searchMsbRoster = require('./routes/searchMsbRoster');
var searchMsbRostergroups = require('./routes/searchMsbRostergroups');
var searchMsbSession = require('./routes/searchMsbSession');
var searchMsbSubscriber = require('./routes/searchMsbSubscriber');
var searchMsbSubscriberprop = require('./routes/searchMsbSubscriberprop');
var searchMsbSubscribertype = require('./routes/searchMsbSubscribertype');
var searchMsbTraffic = require('./routes/searchMsbTraffic');
var searchMsbVcard = require('./routes/searchMsbVcard');
var searchMsbVersion = require('./routes/searchMsbVersion');
var readMsbAccount = require('./routes/readMsbAccount');
var readMsbAffiliation = require('./routes/readMsbAffiliation');
var readMsbAuthorities = require('./routes/readMsbAuthorities');
var readMsbMenus = require('./routes/readMsbMenus');
var readMsbMucaffiliation = require('./routes/readMsbMucaffiliation');
var readMsbMucmember = require('./routes/readMsbMucmember');
var readMsbMucroom = require('./routes/readMsbMucroom');
var readMsbMucroomprop = require('./routes/readMsbMucroomprop');
var readMsbMucservice = require('./routes/readMsbMucservice');
var readMsbMucserviceprop = require('./routes/readMsbMucserviceprop');
var readMsbOffline = require('./routes/readMsbOffline');
var readMsbPersistentLogins = require('./routes/readMsbPersistentLogins');
var readMsbPresence = require('./routes/readMsbPresence');
var readMsbProperty = require('./routes/readMsbProperty');
var readMsbPubsub = require('./routes/readMsbPubsub');
var readMsbPubsubaffiliation = require('./routes/readMsbPubsubaffiliation');
var readMsbPubsubitem = require('./routes/readMsbPubsubitem');
var readMsbPubsubnode = require('./routes/readMsbPubsubnode');
var readMsbPubsubnodegroups = require('./routes/readMsbPubsubnodegroups');
var readMsbPubsubsubscriber = require('./routes/readMsbPubsubsubscriber');
var readMsbPubsubsubscription = require('./routes/readMsbPubsubsubscription');
var readMsbRemoteserver = require('./routes/readMsbRemoteserver');
var readMsbRevenue = require('./routes/readMsbRevenue');
var readMsbRoster = require('./routes/readMsbRoster');
var readMsbRostergroups = require('./routes/readMsbRostergroups');
var readMsbSession = require('./routes/readMsbSession');
var readMsbSubscriber = require('./routes/readMsbSubscriber');
var readMsbSubscriberprop = require('./routes/readMsbSubscriberprop');
var readMsbSubscribertype = require('./routes/readMsbSubscribertype');
var readMsbTraffic = require('./routes/readMsbTraffic');
var readMsbVcard = require('./routes/readMsbVcard');
var readMsbVersion = require('./routes/readMsbVersion');
var newMsbAccount = require('./routes/newMsbAccount');
var newMsbAffiliation = require('./routes/newMsbAffiliation');
var newMsbAuthorities = require('./routes/newMsbAuthorities');
var newMsbMenus = require('./routes/newMsbMenus');
var newMsbMucaffiliation = require('./routes/newMsbMucaffiliation');
var newMsbMucmember = require('./routes/newMsbMucmember');
var newMsbMucroom = require('./routes/newMsbMucroom');
var newMsbMucroomprop = require('./routes/newMsbMucroomprop');
var newMsbMucservice = require('./routes/newMsbMucservice');
var newMsbMucserviceprop = require('./routes/newMsbMucserviceprop');
var newMsbOffline = require('./routes/newMsbOffline');
var newMsbPersistentLogins = require('./routes/newMsbPersistentLogins');
var newMsbPresence = require('./routes/newMsbPresence');
var newMsbProperty = require('./routes/newMsbProperty');
var newMsbPubsub = require('./routes/newMsbPubsub');
var newMsbPubsubaffiliation = require('./routes/newMsbPubsubaffiliation');
var newMsbPubsubitem = require('./routes/newMsbPubsubitem');
var newMsbPubsubnode = require('./routes/newMsbPubsubnode');
var newMsbPubsubnodegroups = require('./routes/newMsbPubsubnodegroups');
var newMsbPubsubsubscriber = require('./routes/newMsbPubsubsubscriber');
var newMsbPubsubsubscription = require('./routes/newMsbPubsubsubscription');
var newMsbRemoteserver = require('./routes/newMsbRemoteserver');
var newMsbRevenue = require('./routes/newMsbRevenue');
var newMsbRoster = require('./routes/newMsbRoster');
var newMsbRostergroups = require('./routes/newMsbRostergroups');
var newMsbSession = require('./routes/newMsbSession');
var newMsbSubscriber = require('./routes/newMsbSubscriber');
var newMsbSubscriberprop = require('./routes/newMsbSubscriberprop');
var newMsbSubscribertype = require('./routes/newMsbSubscribertype');
var newMsbTraffic = require('./routes/newMsbTraffic');
var newMsbVcard = require('./routes/newMsbVcard');
var newMsbVersion = require('./routes/newMsbVersion');
var writeMsbAccount = require('./routes/writeMsbAccount');
var writeMsbAffiliation = require('./routes/writeMsbAffiliation');
var writeMsbAuthorities = require('./routes/writeMsbAuthorities');
var writeMsbMenus = require('./routes/writeMsbMenus');
var writeMsbMucaffiliation = require('./routes/writeMsbMucaffiliation');
var writeMsbMucmember = require('./routes/writeMsbMucmember');
var writeMsbMucroom = require('./routes/writeMsbMucroom');
var writeMsbMucroomprop = require('./routes/writeMsbMucroomprop');
var writeMsbMucservice = require('./routes/writeMsbMucservice');
var writeMsbMucserviceprop = require('./routes/writeMsbMucserviceprop');
var writeMsbOffline = require('./routes/writeMsbOffline');
var writeMsbPersistentLogins = require('./routes/writeMsbPersistentLogins');
var writeMsbPresence = require('./routes/writeMsbPresence');
var writeMsbProperty = require('./routes/writeMsbProperty');
var writeMsbPubsub = require('./routes/writeMsbPubsub');
var writeMsbPubsubaffiliation = require('./routes/writeMsbPubsubaffiliation');
var writeMsbPubsubitem = require('./routes/writeMsbPubsubitem');
var writeMsbPubsubnode = require('./routes/writeMsbPubsubnode');
var writeMsbPubsubnodegroups = require('./routes/writeMsbPubsubnodegroups');
var writeMsbPubsubsubscriber = require('./routes/writeMsbPubsubsubscriber');
var writeMsbPubsubsubscription = require('./routes/writeMsbPubsubsubscription');
var writeMsbRemoteserver = require('./routes/writeMsbRemoteserver');
var writeMsbRevenue = require('./routes/writeMsbRevenue');
var writeMsbRoster = require('./routes/writeMsbRoster');
var writeMsbRostergroups = require('./routes/writeMsbRostergroups');
var writeMsbSession = require('./routes/writeMsbSession');
var writeMsbSubscriber = require('./routes/writeMsbSubscriber');
var writeMsbSubscriberprop = require('./routes/writeMsbSubscriberprop');
var writeMsbSubscribertype = require('./routes/writeMsbSubscribertype');
var writeMsbTraffic = require('./routes/writeMsbTraffic');
var writeMsbVcard = require('./routes/writeMsbVcard');
var writeMsbVersion = require('./routes/writeMsbVersion');
var deleteMsbAccount = require('./routes/deleteMsbAccount');
var deleteMsbAffiliation = require('./routes/deleteMsbAffiliation');
var deleteMsbAuthorities = require('./routes/deleteMsbAuthorities');
var deleteMsbMenus = require('./routes/deleteMsbMenus');
var deleteMsbMucaffiliation = require('./routes/deleteMsbMucaffiliation');
var deleteMsbMucmember = require('./routes/deleteMsbMucmember');
var deleteMsbMucroom = require('./routes/deleteMsbMucroom');
var deleteMsbMucroomprop = require('./routes/deleteMsbMucroomprop');
var deleteMsbMucservice = require('./routes/deleteMsbMucservice');
var deleteMsbMucserviceprop = require('./routes/deleteMsbMucserviceprop');
var deleteMsbOffline = require('./routes/deleteMsbOffline');
var deleteMsbPersistentLogins = require('./routes/deleteMsbPersistentLogins');
var deleteMsbPresence = require('./routes/deleteMsbPresence');
var deleteMsbProperty = require('./routes/deleteMsbProperty');
var deleteMsbPubsub = require('./routes/deleteMsbPubsub');
var deleteMsbPubsubaffiliation = require('./routes/deleteMsbPubsubaffiliation');
var deleteMsbPubsubitem = require('./routes/deleteMsbPubsubitem');
var deleteMsbPubsubnode = require('./routes/deleteMsbPubsubnode');
var deleteMsbPubsubnodegroups = require('./routes/deleteMsbPubsubnodegroups');
var deleteMsbPubsubsubscriber = require('./routes/deleteMsbPubsubsubscriber');
var deleteMsbPubsubsubscription = require('./routes/deleteMsbPubsubsubscription');
var deleteMsbRemoteserver = require('./routes/deleteMsbRemoteserver');
var deleteMsbRevenue = require('./routes/deleteMsbRevenue');
var deleteMsbRoster = require('./routes/deleteMsbRoster');
var deleteMsbRostergroups = require('./routes/deleteMsbRostergroups');
var deleteMsbSession = require('./routes/deleteMsbSession');
var deleteMsbSubscriber = require('./routes/deleteMsbSubscriber');
var deleteMsbSubscriberprop = require('./routes/deleteMsbSubscriberprop');
var deleteMsbSubscribertype = require('./routes/deleteMsbSubscribertype');
var deleteMsbTraffic = require('./routes/deleteMsbTraffic');
var deleteMsbVcard = require('./routes/deleteMsbVcard');
var deleteMsbVersion = require('./routes/deleteMsbVersion');

var domain = 'domain.com';
var app = express();

app.use(session({
    key: 'user_sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: 6000000
    }  
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cookieParser());
app.use(device.capture());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  req.session.domain = domain;
  if (req.cookies.user_sid && !req.session.user_sid) {
      res.clearCookie('user_sid');
  }
  next();
});

app.use('/', indexRouter);
app.use('/searchMsbAccount', searchMsbAccount);
app.use('/searchMsbAffiliation', searchMsbAffiliation);
app.use('/searchMsbAuthorities', searchMsbAuthorities);
app.use('/searchMsbMenus', searchMsbMenus);
app.use('/searchMsbMucaffiliation', searchMsbMucaffiliation);
app.use('/searchMsbMucmember', searchMsbMucmember);
app.use('/searchMsbMucroom', searchMsbMucroom);
app.use('/searchMsbMucroomprop', searchMsbMucroomprop);
app.use('/searchMsbMucservice', searchMsbMucservice);
app.use('/searchMsbMucserviceprop', searchMsbMucserviceprop);
app.use('/searchMsbOffline', searchMsbOffline);
app.use('/searchMsbPersistentLogins', searchMsbPersistentLogins);
app.use('/searchMsbPresence', searchMsbPresence);
app.use('/searchMsbProperty', searchMsbProperty);
app.use('/searchMsbPubsub', searchMsbPubsub);
app.use('/searchMsbPubsubaffiliation', searchMsbPubsubaffiliation);
app.use('/searchMsbPubsubitem', searchMsbPubsubitem);
app.use('/searchMsbPubsubnode', searchMsbPubsubnode);
app.use('/searchMsbPubsubnodegroups', searchMsbPubsubnodegroups);
app.use('/searchMsbPubsubsubscriber', searchMsbPubsubsubscriber);
app.use('/searchMsbPubsubsubscription', searchMsbPubsubsubscription);
app.use('/searchMsbRemoteserver', searchMsbRemoteserver);
app.use('/searchMsbRevenue', searchMsbRevenue);
app.use('/searchMsbRoster', searchMsbRoster);
app.use('/searchMsbRostergroups', searchMsbRostergroups);
app.use('/searchMsbSession', searchMsbSession);
app.use('/searchMsbSubscriber', searchMsbSubscriber);
app.use('/searchMsbSubscriberprop', searchMsbSubscriberprop);
app.use('/searchMsbSubscribertype', searchMsbSubscribertype);
app.use('/searchMsbTraffic', searchMsbTraffic);
app.use('/searchMsbVcard', searchMsbVcard);
app.use('/searchMsbVersion', searchMsbVersion);
app.use('/readMsbAccount', readMsbAccount);
app.use('/readMsbAffiliation', readMsbAffiliation);
app.use('/readMsbAuthorities', readMsbAuthorities);
app.use('/readMsbMenus', readMsbMenus);
app.use('/readMsbMucaffiliation', readMsbMucaffiliation);
app.use('/readMsbMucmember', readMsbMucmember);
app.use('/readMsbMucroom', readMsbMucroom);
app.use('/readMsbMucroomprop', readMsbMucroomprop);
app.use('/readMsbMucservice', readMsbMucservice);
app.use('/readMsbMucserviceprop', readMsbMucserviceprop);
app.use('/readMsbOffline', readMsbOffline);
app.use('/readMsbPersistentLogins', readMsbPersistentLogins);
app.use('/readMsbPresence', readMsbPresence);
app.use('/readMsbProperty', readMsbProperty);
app.use('/readMsbPubsub', readMsbPubsub);
app.use('/readMsbPubsubaffiliation', readMsbPubsubaffiliation);
app.use('/readMsbPubsubitem', readMsbPubsubitem);
app.use('/readMsbPubsubnode', readMsbPubsubnode);
app.use('/readMsbPubsubnodegroups', readMsbPubsubnodegroups);
app.use('/readMsbPubsubsubscriber', readMsbPubsubsubscriber);
app.use('/readMsbPubsubsubscription', readMsbPubsubsubscription);
app.use('/readMsbRemoteserver', readMsbRemoteserver);
app.use('/readMsbRevenue', readMsbRevenue);
app.use('/readMsbRoster', readMsbRoster);
app.use('/readMsbRostergroups', readMsbRostergroups);
app.use('/readMsbSession', readMsbSession);
app.use('/readMsbSubscriber', readMsbSubscriber);
app.use('/readMsbSubscriberprop', readMsbSubscriberprop);
app.use('/readMsbSubscribertype', readMsbSubscribertype);
app.use('/readMsbTraffic', readMsbTraffic);
app.use('/readMsbVcard', readMsbVcard);
app.use('/readMsbVersion', readMsbVersion);
app.use('/newMsbAccount', newMsbAccount);
app.use('/newMsbAffiliation', newMsbAffiliation);
app.use('/newMsbAuthorities', newMsbAuthorities);
app.use('/newMsbMenus', newMsbMenus);
app.use('/newMsbMucaffiliation', newMsbMucaffiliation);
app.use('/newMsbMucmember', newMsbMucmember);
app.use('/newMsbMucroom', newMsbMucroom);
app.use('/newMsbMucroomprop', newMsbMucroomprop);
app.use('/newMsbMucservice', newMsbMucservice);
app.use('/newMsbMucserviceprop', newMsbMucserviceprop);
app.use('/newMsbOffline', newMsbOffline);
app.use('/newMsbPersistentLogins', newMsbPersistentLogins);
app.use('/newMsbPresence', newMsbPresence);
app.use('/newMsbProperty', newMsbProperty);
app.use('/newMsbPubsub', newMsbPubsub);
app.use('/newMsbPubsubaffiliation', newMsbPubsubaffiliation);
app.use('/newMsbPubsubitem', newMsbPubsubitem);
app.use('/newMsbPubsubnode', newMsbPubsubnode);
app.use('/newMsbPubsubnodegroups', newMsbPubsubnodegroups);
app.use('/newMsbPubsubsubscriber', newMsbPubsubsubscriber);
app.use('/newMsbPubsubsubscription', newMsbPubsubsubscription);
app.use('/newMsbRemoteserver', newMsbRemoteserver);
app.use('/newMsbRevenue', newMsbRevenue);
app.use('/newMsbRoster', newMsbRoster);
app.use('/newMsbRostergroups', newMsbRostergroups);
app.use('/newMsbSession', newMsbSession);
app.use('/newMsbSubscriber', newMsbSubscriber);
app.use('/newMsbSubscriberprop', newMsbSubscriberprop);
app.use('/newMsbSubscribertype', newMsbSubscribertype);
app.use('/newMsbTraffic', newMsbTraffic);
app.use('/newMsbVcard', newMsbVcard);
app.use('/newMsbVersion', newMsbVersion);
app.use('/writeMsbAccount', writeMsbAccount);
app.use('/writeMsbAffiliation', writeMsbAffiliation);
app.use('/writeMsbAuthorities', writeMsbAuthorities);
app.use('/writeMsbMenus', writeMsbMenus);
app.use('/writeMsbMucaffiliation', writeMsbMucaffiliation);
app.use('/writeMsbMucmember', writeMsbMucmember);
app.use('/writeMsbMucroom', writeMsbMucroom);
app.use('/writeMsbMucroomprop', writeMsbMucroomprop);
app.use('/writeMsbMucservice', writeMsbMucservice);
app.use('/writeMsbMucserviceprop', writeMsbMucserviceprop);
app.use('/writeMsbOffline', writeMsbOffline);
app.use('/writeMsbPersistentLogins', writeMsbPersistentLogins);
app.use('/writeMsbPresence', writeMsbPresence);
app.use('/writeMsbProperty', writeMsbProperty);
app.use('/writeMsbPubsub', writeMsbPubsub);
app.use('/writeMsbPubsubaffiliation', writeMsbPubsubaffiliation);
app.use('/writeMsbPubsubitem', writeMsbPubsubitem);
app.use('/writeMsbPubsubnode', writeMsbPubsubnode);
app.use('/writeMsbPubsubnodegroups', writeMsbPubsubnodegroups);
app.use('/writeMsbPubsubsubscriber', writeMsbPubsubsubscriber);
app.use('/writeMsbPubsubsubscription', writeMsbPubsubsubscription);
app.use('/writeMsbRemoteserver', writeMsbRemoteserver);
app.use('/writeMsbRevenue', writeMsbRevenue);
app.use('/writeMsbRoster', writeMsbRoster);
app.use('/writeMsbRostergroups', writeMsbRostergroups);
app.use('/writeMsbSession', writeMsbSession);
app.use('/writeMsbSubscriber', writeMsbSubscriber);
app.use('/writeMsbSubscriberprop', writeMsbSubscriberprop);
app.use('/writeMsbSubscribertype', writeMsbSubscribertype);
app.use('/writeMsbTraffic', writeMsbTraffic);
app.use('/writeMsbVcard', writeMsbVcard);
app.use('/writeMsbVersion', writeMsbVersion);
app.use('/deleteMsbAccount', deleteMsbAccount);
app.use('/deleteMsbAffiliation', deleteMsbAffiliation);
app.use('/deleteMsbAuthorities', deleteMsbAuthorities);
app.use('/deleteMsbMenus', deleteMsbMenus);
app.use('/deleteMsbMucaffiliation', deleteMsbMucaffiliation);
app.use('/deleteMsbMucmember', deleteMsbMucmember);
app.use('/deleteMsbMucroom', deleteMsbMucroom);
app.use('/deleteMsbMucroomprop', deleteMsbMucroomprop);
app.use('/deleteMsbMucservice', deleteMsbMucservice);
app.use('/deleteMsbMucserviceprop', deleteMsbMucserviceprop);
app.use('/deleteMsbOffline', deleteMsbOffline);
app.use('/deleteMsbPersistentLogins', deleteMsbPersistentLogins);
app.use('/deleteMsbPresence', deleteMsbPresence);
app.use('/deleteMsbProperty', deleteMsbProperty);
app.use('/deleteMsbPubsub', deleteMsbPubsub);
app.use('/deleteMsbPubsubaffiliation', deleteMsbPubsubaffiliation);
app.use('/deleteMsbPubsubitem', deleteMsbPubsubitem);
app.use('/deleteMsbPubsubnode', deleteMsbPubsubnode);
app.use('/deleteMsbPubsubnodegroups', deleteMsbPubsubnodegroups);
app.use('/deleteMsbPubsubsubscriber', deleteMsbPubsubsubscriber);
app.use('/deleteMsbPubsubsubscription', deleteMsbPubsubsubscription);
app.use('/deleteMsbRemoteserver', deleteMsbRemoteserver);
app.use('/deleteMsbRevenue', deleteMsbRevenue);
app.use('/deleteMsbRoster', deleteMsbRoster);
app.use('/deleteMsbRostergroups', deleteMsbRostergroups);
app.use('/deleteMsbSession', deleteMsbSession);
app.use('/deleteMsbSubscriber', deleteMsbSubscriber);
app.use('/deleteMsbSubscriberprop', deleteMsbSubscriberprop);
app.use('/deleteMsbSubscribertype', deleteMsbSubscribertype);
app.use('/deleteMsbTraffic', deleteMsbTraffic);
app.use('/deleteMsbVcard', deleteMsbVcard);
app.use('/deleteMsbVersion', deleteMsbVersion);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
