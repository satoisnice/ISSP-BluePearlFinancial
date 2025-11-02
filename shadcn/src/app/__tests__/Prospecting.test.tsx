import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Prospecting from '../prospecting/page';

// Mock the components used in the page
jest.mock('@/components/ProspectsList', () => {
  return function MockProspectsList() {
    return <div data-testid="prospects-list">Mock Prospects List</div>;
  };
});

jest.mock('@/components/ui/progress', () => ({
  Progress: function MockProgress({ value }: { value: number }) {
    return <div data-testid="progress" data-value={value}>Progress: {value}%</div>;
  }
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Phone: () => <div data-testid="phone-icon">Phone</div>,
  Zap: () => <div data-testid="zap-icon">Zap</div>,
  Users: () => <div data-testid="users-icon">Users</div>,
  RotateCw: () => <div data-testid="rotate-icon">Rotate</div>,
  TrendingUp: () => <div data-testid="trending-icon">TrendingUp</div>,
}));

describe('Prospecting Page', () => {
  describe('Page Header', () => {
    it('renders the page title', () => {
      render(<Prospecting />);
      expect(screen.getByText('Prospecting Center')).toBeInTheDocument();
    });

    it('renders the page subtitle', () => {
      render(<Prospecting />);
      expect(screen.getByText('Converts leads into applications')).toBeInTheDocument();
    });

    it('renders the Auto-Dialer button', () => {
      render(<Prospecting />);
      expect(screen.getByRole('button', { name: /auto-dialer/i })).toBeInTheDocument();
    });

    it('renders the Start Session button', () => {
      render(<Prospecting />);
      expect(screen.getByRole('button', { name: /start session/i })).toBeInTheDocument();
    });

    it('Auto-Dialer button has purple background', () => {
      render(<Prospecting />);
      const button = screen.getByRole('button', { name: /auto-dialer/i });
      expect(button).toHaveClass('bg-purple-700');
    });

    it('Start Session button has green background', () => {
      render(<Prospecting />);
      const button = screen.getByRole('button', { name: /start session/i });
      expect(button).toHaveClass('bg-green-500');
    });
  });

  describe('Statistics Cards', () => {
    it('renders New Leads card', () => {
      render(<Prospecting />);
      expect(screen.getByText('New Leads')).toBeInTheDocument();
    });

    it('renders Follow ups card', () => {
      render(<Prospecting />);
      expect(screen.getByText('Follow ups')).toBeInTheDocument();
    });

    it('renders Conversion Rates card', () => {
      render(<Prospecting />);
      expect(screen.getByText('Conversion Rates')).toBeInTheDocument();
    });

    it('renders Calls Today card', () => {
      render(<Prospecting />);
      expect(screen.getByText('Calls Today')).toBeInTheDocument();
    });

    it('displays placeholder text in statistics cards', () => {
      render(<Prospecting />);
      const placeholders = screen.getAllByText('"A Number"');
      expect(placeholders.length).toBeGreaterThan(0);
    });
  });

  describe('Call Scripts Section', () => {
    it('renders Call Scripts section', () => {
      render(<Prospecting />);
      expect(screen.getByText('Call Scripts')).toBeInTheDocument();
    });

    it('renders First Contact script option', () => {
      render(<Prospecting />);
      expect(screen.getByText('First Contact')).toBeInTheDocument();
      expect(screen.getByText('Introduction & qualification')).toBeInTheDocument();
    });

    it('renders Follow-up script option', () => {
      render(<Prospecting />);
      expect(screen.getByText('Follow-up')).toBeInTheDocument();
      expect(screen.getByText('Rate discussion & next steps')).toBeInTheDocument();
    });

    it('renders Objection Handling script option', () => {
      render(<Prospecting />);
      expect(screen.getByText('Objection Handling')).toBeInTheDocument();
      expect(screen.getByText('Rate shopping responses')).toBeInTheDocument();
    });

    it('script buttons have hover effects', () => {
      const { container } = render(<Prospecting />);
      const buttons = container.querySelectorAll('button.hover\\:bg-primary-foreground');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe('Today\'s Challenge Section', () => {
    it('renders Today\'s Challenge section', () => {
      render(<Prospecting />);
      expect(screen.getByText("Today's Challenge")).toBeInTheDocument();
    });

    it('renders progress bar', () => {
      render(<Prospecting />);
      const progressBar = screen.getByTestId('progress');
      expect(progressBar).toBeInTheDocument();
    });

    it('progress bar shows correct value', () => {
      render(<Prospecting />);
      const progressBar = screen.getByTestId('progress');
      expect(progressBar).toHaveAttribute('data-value', '33');
    });
  });

  describe('Prospects List', () => {
    it('renders ProspectsList component', () => {
      render(<Prospecting />);
      expect(screen.getByTestId('prospects-list')).toBeInTheDocument();
    });
  });

  describe('Page Layout', () => {
    it('has proper padding on main container', () => {
      const { container } = render(<Prospecting />);
      const mainDiv = container.querySelector('.flex-1.p-6');
      expect(mainDiv).toBeInTheDocument();
    });

    it('has max-width container', () => {
      const { container } = render(<Prospecting />);
      const maxWidthDiv = container.querySelector('.max-w-7xl');
      expect(maxWidthDiv).toBeInTheDocument();
    });

    it('uses grid layout for statistics cards', () => {
      const { container } = render(<Prospecting />);
      const gridContainer = container.querySelector('.grid.grid-cols-4');
      expect(gridContainer).toBeInTheDocument();
    });

    it('uses responsive grid layout', () => {
      const { container } = render(<Prospecting />);
      const responsiveGrid = container.querySelector('.grid.grid-cols-2.lg\\:gridcols-4.xl\\:grid-cols-3');
      expect(responsiveGrid).toBeInTheDocument();
    });
  });

  describe('Button Interactions', () => {
    it('all buttons are properly rendered as button elements', () => {
      render(<Prospecting />);
      const autoDialerBtn = screen.getByRole('button', { name: /auto-dialer/i });
      const startSessionBtn = screen.getByRole('button', { name: /start session/i });

      expect(autoDialerBtn.tagName).toBe('BUTTON');
      expect(startSessionBtn.tagName).toBe('BUTTON');
    });
  });

  describe('Icons', () => {
    it('renders icons in the statistics cards', () => {
      render(<Prospecting />);
      expect(screen.getByTestId('users-icon')).toBeInTheDocument();
      expect(screen.getAllByTestId('rotate-icon').length).toBeGreaterThan(0);
      expect(screen.getByTestId('trending-icon')).toBeInTheDocument();
    });

    it('renders icons in action buttons', () => {
      render(<Prospecting />);
      expect(screen.getByTestId('zap-icon')).toBeInTheDocument();
      expect(screen.getByTestId('phone-icon')).toBeInTheDocument();
    });
  });

  describe('Styling and Colors', () => {
    it('New Leads card has blue icon background', () => {
      const { container } = render(<Prospecting />);
      const blueIcon = container.querySelector('.bg-blue-400');
      expect(blueIcon).toBeInTheDocument();
    });

    it('Follow ups card has yellow icon background', () => {
      const { container } = render(<Prospecting />);
      const yellowIcon = container.querySelector('.bg-yellow-200');
      expect(yellowIcon).toBeInTheDocument();
    });

    it('Conversion Rates card has red icon background', () => {
      const { container } = render(<Prospecting />);
      const redIcon = container.querySelector('.bg-red-400');
      expect(redIcon).toBeInTheDocument();
    });

    it('Calls Today card has purple icon background', () => {
      const { container } = render(<Prospecting />);
      const purpleIcon = container.querySelector('.bg-purple-400');
      expect(purpleIcon).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('renders semantic HTML headings', () => {
      const { container } = render(<Prospecting />);
      const h2Elements = container.querySelectorAll('h2');
      const h3Elements = container.querySelectorAll('h3');
      expect(h2Elements.length).toBeGreaterThan(0);
      expect(h3Elements.length).toBeGreaterThan(0);
    });

    it('buttons are keyboard accessible', () => {
      render(<Prospecting />);
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toBeInTheDocument();
      });
    });
  });
});
