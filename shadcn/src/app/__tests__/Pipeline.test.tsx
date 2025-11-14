import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProspectingPage from '../pipeline/page';

// Mock the components used in the page
jest.mock('@/components/PipelineCards', () => {
  return function MockPipelineCards() {
    return <div data-testid="pipeline-cards">Mock Pipeline Cards</div>;
  };
});

jest.mock('@/components/ui/ActiveDeals', () => {
  return function MockActiveDeals() {
    return <div data-testid="active-deals">Mock Active Deals</div>;
  };
});

jest.mock('@/components/ui/PipelineTopBar', () => ({
  PipelineTopBar: function MockPipelineTopBar() {
    return <div data-testid="pipeline-topbar">Mock Pipeline Top Bar</div>;
  }
}));

describe('Pipeline Page', () => {
  describe('Page Structure', () => {
    it('renders without crashing', () => {
      render(<ProspectingPage />);
      expect(screen.getByTestId('pipeline-topbar')).toBeInTheDocument();
    });

    it('renders the PipelineTopBar component', () => {
      render(<ProspectingPage />);
      expect(screen.getByTestId('pipeline-topbar')).toBeInTheDocument();
    });

    it('renders the PipelineCards component', () => {
      render(<ProspectingPage />);
      expect(screen.getByTestId('pipeline-cards')).toBeInTheDocument();
    });

    it('renders the ActiveDeals component', () => {
      render(<ProspectingPage />);
      expect(screen.getByTestId('active-deals')).toBeInTheDocument();
    });
  });

  describe('Layout', () => {
    it('has proper section wrapper with padding', () => {
      const { container } = render(<ProspectingPage />);
      const section = container.querySelector('section');
      expect(section).toHaveClass('px-6');
    });

    it('has max-width container for content', () => {
      const { container } = render(<ProspectingPage />);
      const maxWidthDiv = container.querySelector('.max-w-7xl');
      expect(maxWidthDiv).toBeInTheDocument();
    });

    it('has proper spacing between components', () => {
      const { container } = render(<ProspectingPage />);
      const spacedDiv = container.querySelector('.space-y-6');
      expect(spacedDiv).toBeInTheDocument();
    });

    it('centers content with mx-auto', () => {
      const { container } = render(<ProspectingPage />);
      const centeredDiv = container.querySelector('.mx-auto');
      expect(centeredDiv).toBeInTheDocument();
    });
  });

  describe('Component Order', () => {
    it('renders components in correct order', () => {
      render(<ProspectingPage />);
      const topBar = screen.getByTestId('pipeline-topbar');
      const cards = screen.getByTestId('pipeline-cards');
      const deals = screen.getByTestId('active-deals');

      // Check if topBar comes before cards in DOM
      expect(topBar.compareDocumentPosition(cards)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
      // Check if cards comes before deals in DOM
      expect(cards.compareDocumentPosition(deals)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    });
  });

  describe('Responsive Design', () => {
    it('applies responsive padding classes', () => {
      const { container } = render(<ProspectingPage />);
      const section = container.querySelector('section');
      expect(section).toHaveClass('px-6');
    });
  });

  describe('Semantic HTML', () => {
    it('uses semantic section element', () => {
      const { container } = render(<ProspectingPage />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });
});
