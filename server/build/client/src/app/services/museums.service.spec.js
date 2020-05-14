"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const museums_service_1 = require("./museums.service");
describe('MuseumsService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(museums_service_1.MuseumsService);
        expect(service).toBeTruthy();
    });
});
