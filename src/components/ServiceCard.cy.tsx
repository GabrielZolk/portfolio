import { mount } from "cypress/react";
import "../../workaround-cypress-10-0-2-process-issue"
import ServiceCard from "./ServiceCard";


describe('ServiceCard', () => {
    it('renders the title and paragraph', () => {
      const image = '../imgs/design.svg';
      const title = 'My Service';
      const paragraph = 'This is a description of my service';
      mount(<ServiceCard image={image} title={title} paragraph={paragraph} />);
      
      cy.get('h4').should('contain', title);
      cy.get('p').should('contain', paragraph);
    });
  });
