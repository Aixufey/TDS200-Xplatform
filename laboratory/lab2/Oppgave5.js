/*
    Oppgave 5: Type guards and Discriminated unions
    Definer en unionstype MyResponse med egenskapene status (number) og
    data (string eller number) for å representere API-responser. Skriv en funksjon
    handleResponsesom tar et MyResponse-objekt og logger innholdet basert på
    statusen. Du kan se på alt som ikke gir status = 200 som en error.

    Utvid funksjonen til å bruke fetch for å hente data fra et API. F.eks. pokeapi.co.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// Dummy datagram
var successData = {
    status: 200,
    data: "Fetched successful"
};
var errorData = {
    status: 400,
    data: "Error fetching data"
};
// Part 1 test 
var getResponse = function (response) {
    if (response.status === 200) {
        console.log("Success", response.data);
    }
    else {
        console.log("Error", response.data);
    }
};
getResponse(successData);
var fetchResponse = function (response) { return __awaiter(_this, void 0, void 0, function () {
    var data, form, _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!(response.status === 200)) return [3 /*break*/, 2];
                return [4 /*yield*/, response.json()];
            case 1:
                data = _d.sent();
                if (data.forms) {
                    form = data.forms[0];
                    console.log("A Pokemon ".concat(data.id, " ").concat(data.name, " ").concat(form.name, " ").concat(form.url));
                }
                return [3 /*break*/, 4];
            case 2:
                _b = (_a = console).log;
                _c = ["Error"];
                return [4 /*yield*/, response.json()];
            case 3:
                _b.apply(_a, _c.concat([_d.sent()]));
                _d.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
var getPokemon = function () { return __awaiter(_this, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/1")];
            case 1:
                data = _a.sent();
                fetchResponse(data);
                return [2 /*return*/];
        }
    });
}); };
getPokemon();
