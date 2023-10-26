"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Testschema = new mongoose_1.default.Schema({
    name: {
        type: mongoose_1.default.SchemaTypes.String,
        require: true
    },
    age: {
        type: mongoose_1.default.SchemaTypes.Number,
        require: true
    }
}, {
    timestamps: true
});
const testModel = mongoose_1.default.model("test", Testschema);
exports.testModel = testModel;
