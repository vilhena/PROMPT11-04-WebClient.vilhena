/// <reference path="../../../Scripts/jquery-1.6.4.js" />

(function () {

    //"class" linqset init
    linqset = function () { this.array = []; }

    var from = function (someArray) {
        this.array = someArray;
        return this;
    }

    linqset.prototype.count = function () {
        return this.array.length;
    }

    linqset.prototype.where = function (predicateFunction) {
        var arr = [];
        for (var i = 0; i < this.array.length; i++) {
            if (predicateFunction.call(this.array[i])) //call needed to use the correct this, otherwise uses the linqset
                arr.push(this.array[i]);
        }
        this.array = arr;
        return this;
    }

    linqset.prototype.order = function (compareFunction) {
        this.array.sort(compareFunction);
        return this;
    }

    linqset.prototype.orderby = function (columnSelectorFunction) {
        this.array = this.array.sort(function (a, b) {
            return columnSelectorFunction.call(a) - columnSelectorFunction.call(b)
        }
        );
        return this;
    }

    linqset.prototype.select = function (projectionFunction) {
        var arr = [];
        for (var i = 0; i < this.array.length; i++) {
            arr.push(projectionFunction.call(this.array[i]));
        }
        this.array = arr;
        return this;
    }

    linqset.prototype.any = function (predicateFunction) {
        for (var i = 0; i < this.array.length; i++) {
            if (predicateFunction.call(this.array[i])) return true;
        }
        return false;
    }

    linqset.prototype.all = function (predicateFunction) {
        for (var i = 0; i < this.array.length; i++) {
            if (!predicateFunction.call(this.array[i])) return false;
        }
        return true;
    }

    linqset.prototype.foreach = function (actionFunction) {
        for (var i = 0; i < length; i++) {
            actionFunction.call(this.array[i]);
        }
        return this;
    }

    linq = window.linq = new linqset;
    linq.from = from;
})();