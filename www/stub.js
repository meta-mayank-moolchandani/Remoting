this["Perf"] && void 0 !== this["Perf"].enabled || (function(window) {
    'use strict';
    var a = {
        DEBUG: {
            name: "DEBUG",
            value: 1
        },
        INTERNAL: {
            name: "INTERNAL",
            value: 2
        },
        PRODUCTION: {
            name: "PRODUCTION",
            value: 3
        },
        DISABLED: {
            name: "DISABLED",
            value: 4
        }
    };
    window.PerfConstants = {
        PAGE_START_MARK: "PageStart",
        PERF_PAYLOAD_PARAM: "bulkPerf",
        MARK_NAME: "mark",
        MEASURE_NAME: "measure",
        MARK_START_TIME: "st",
        MARK_LAST_TIME: "lt",
        PAGE_NAME: "pn",
        ELAPSED_TIME: "et",
        REFERENCE_TIME: "rt",
        Perf_LOAD_DONE: "loadDone",
        STATS: {
            NAME: "stat",
            SERVER_ELAPSED: "internal_serverelapsed",
            DB_TOTAL_TIME: "internal_serverdbtotaltime",
            DB_CALLS: "internal_serverdbcalls",
            DB_FETCHES: "internal_serverdbfetches"
        }
    };
    window.PerfLogLevel = a;
    var b = window.Perf = {
        currentLogLevel: a.DISABLED,
        mark: function() {
            return b
        },
        endMark: function() {
            return b
        },
        updateMarkName: function() {
            return b
        },
        measureToJson: function() {
            return ""
        },
        toJson: function() {
            return ""
        },
        setTimer: function() {
            return b
        },
        setServerTime: function() {
            return b
        },
        toPostVar: function() {
            return ""
        },
        getMeasures: function() {
            return []
        },
        getBeaconData: function() {
            return null
        },
        setBeaconData: function() {},
        clearBeaconData: function() {},
        removeStats: function() {},
        stat: function() {
            return b
        },
        getStat: function() {
            return -1
        },
        onLoad: function() {},
        startTransaction: function() {
            return b
        },
        endTransaction: function() {
            return b
        },
        updateTransaction: function() {
            return b
        },
        isOnLoadFired: function() {
            return !1
        },
        util: {
            setCookie: function() {}
        },
        enabled: !1
    };
})(this);