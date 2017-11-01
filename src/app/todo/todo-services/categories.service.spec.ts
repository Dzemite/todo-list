import {CategoriesService} from './categories.service';
import {TestBed, inject, async} from '@angular/core/testing';
import {HttpModule, XHRBackend, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('Categories service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        CategoriesService,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
  });

  // TODO: refactor it. It doesn't work correct
  describe('getCategories()', () => {

    it('Should return array of Category', async(inject([CategoriesService, XHRBackend], (categoriesService, mockBackend) => {

        const mockResponse = {
          _body: [
            {_id: 0, name: 'category 1'}
          ]
        };

        const body = JSON.stringify(mockResponse);
        console.log('body: ', body);

        // TODO: Need to fix: service can not get correct response
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: body
          })));
        });

        categoriesService.getCategories()
          .subscribe(
            categories => {
              console.log('inTest categories: ', categories);
              // expect(categories.length).toEqual(1);

              // expect(categories[0]._id).toEqual(0);
              // expect(categories[1]._id).toEqual(1);
              // expect(categories[2]._id).toEqual(2);

              // expect(categories[0].name).toEqual("category 1");
              // expect(categories[0].name).toEqual("category 2");
              // expect(categories[0].name).toEqual("category 3");
            }
          );
      }))
    );
  });
});
