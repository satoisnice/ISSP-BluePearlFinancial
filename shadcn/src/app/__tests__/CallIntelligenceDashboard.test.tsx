import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../CallIntelligenceDashboard/page';

// Mock the components used in the page
jest.mock('@/components/ClientCard', () => {
  return function MockClientCard() {
    return <div data-testid="client-card">Mock Client Card</div>;
  };
});

jest.mock('@/components/ui/DropdownDate', () => ({
  DropdownDate: function MockDropdownDate() {
    return <div data-testid="dropdown-date">Date Dropdown</div>;
  }
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  }
}));

describe('CallIntelligenceDashboard', () => {
  describe('Page Header', () => {
    it('renders the page title', () => {
      render(<Homepage />);
      expect(screen.getByText('Call Intelligence Dashboard')).toBeInTheDocument();
    });

    it('renders the page subtitle', () => {
      render(<Homepage />);
      expect(screen.getByText('AI-powered analysis of your calls')).toBeInTheDocument();
    });

    it('renders the Start Calling button', () => {
      render(<Homepage />);
      expect(screen.getByRole('button', { name: /start calling/i })).toBeInTheDocument();
    });

    it('renders the date dropdown component', () => {
      render(<Homepage />);
      expect(screen.getByTestId('dropdown-date')).toBeInTheDocument();
    });
  });

  describe('Statistics Section', () => {
    it('displays total calls metric', () => {
      render(<Homepage />);
      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByText('Total Calls')).toBeInTheDocument();
    });

    it('displays connected calls metric', () => {
      render(<Homepage />);
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('Connected')).toBeInTheDocument();
    });

    it('displays applications metric', () => {
      render(<Homepage />);
      expect(screen.getByText('Applications')).toBeInTheDocument();
      // Check that "1" appears in the document (there are multiple instances)
      expect(screen.getAllByText('1').length).toBeGreaterThan(0);
    });

    it('displays cross-sells found metric', () => {
      render(<Homepage />);
      expect(screen.getByText('4')).toBeInTheDocument();
      expect(screen.getByText('Cross-sells Found')).toBeInTheDocument();
    });

    it('displays high urgency metric', () => {
      render(<Homepage />);
      expect(screen.getByText('High Urgency')).toBeInTheDocument();
      // Check that "1" appears in the document (there are multiple instances)
      expect(screen.getAllByText('1').length).toBeGreaterThan(0);
    });
  });

  describe('Call Cards Section', () => {
    it('renders the ClientCard component', () => {
      render(<Homepage />);
      const clientCards = screen.getAllByTestId('client-card');
      expect(clientCards.length).toBeGreaterThan(0);
    });
  });

  describe('Page Structure', () => {
    it('has proper section borders', () => {
      const { container } = render(<Homepage />);
      const borderedDivs = container.querySelectorAll('.border-b');
      expect(borderedDivs.length).toBeGreaterThan(0);
    });

    it('displays statistics in a grid layout', () => {
      const { container } = render(<Homepage />);
      const gridContainer = container.querySelector('.grid.grid-cols-6');
      expect(gridContainer).toBeInTheDocument();
    });

    it('applies correct styling classes', () => {
      const { container } = render(<Homepage />);
      const totalCallsMetric = screen.getByText('3');
      expect(totalCallsMetric).toHaveClass('text-3xl', 'font-bold');
    });
  });

  describe('Metric Colors', () => {
    it('applies green color to connected metric', () => {
      render(<Homepage />);
      const connectedMetric = screen.getByText('2');
      expect(connectedMetric).toHaveClass('text-green-600');
    });

    it('applies blue color to applications metric', () => {
      render(<Homepage />);
      const applicationsMetric = screen.getAllByText('1').find(el =>
        el.classList.contains('text-blue-600')
      );
      expect(applicationsMetric).toHaveClass('text-blue-600');
    });

    it('applies red color to high urgency metric', () => {
      render(<Homepage />);
      const urgencyMetric = screen.getAllByText('1').find(el =>
        el.classList.contains('text-red-600')
      );
      expect(urgencyMetric).toHaveClass('text-red-600');
    });
  });

  describe('Accessibility', () => {
    it('renders semantic HTML structure', () => {
      const { container } = render(<Homepage />);
      const h1Elements = container.querySelectorAll('h1');
      const h4Elements = container.querySelectorAll('h4');
      expect(h1Elements.length).toBeGreaterThan(0);
      expect(h4Elements.length).toBeGreaterThan(0);
    });

    it('has clickable button with proper role', () => {
      render(<Homepage />);
      const button = screen.getByRole('button', { name: /start calling/i });
      expect(button).toHaveAttribute('class');
    });
  });
});
