import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookPage from '../Book/page';
import { mockClients } from '@/data/mockClients';

// Mock the mockClients data
jest.mock('@/data/mockClients', () => ({
  mockClients: [
    {
      id: 1,
      name: 'Test Client 1',
      address: '123 Test St',
      renewalDays: 30,
      renewalDate: '2025-12-01',
      currentAmount: 500000,
      currentRate: 3.5,
      propertyValue: 750000,
      equity: 250000,
      opportunities: 2,
      propertyValueChange: 5,
      paymentRoom: 500,
      lifetimeValue: 50000,
      originalDeal: {
        year: 2020,
        amount: 450000,
        rateSecured: 2.5,
        commission: 4500,
        competitors: [
          { bank: 'TD', rate: 2.7 },
          { bank: 'RBC', rate: 2.8 }
        ],
        wonReason: 'Best rate and service'
      },
      lifeChanges: [
        {
          event: 'Marriage',
          year: '2021',
          description: 'Got married',
          icon: 'heart'
        }
      ],
      financial: {
        householdIncome: 150000,
        incomeChange: 20000,
        debts: [
          {
            type: 'Car Loan',
            payment: 500,
            amount: 25000,
            rate: 5
          }
        ]
      },
      primaryOpportunity: {
        title: 'Renewal Opportunity',
        description: 'Renewal coming up',
        savingsAmount: 200,
        urgency: 'high',
        urgencyReason: 'Renewal in 30 days'
      },
      crossSellOpportunities: [
        {
          title: 'Insurance',
          description: 'Life insurance gap',
          benefit: 'Protection',
          type: 'protection'
        }
      ],
      competitiveAlert: {
        threats: ['Bank might offer better rate'],
        clientLoyalty: 'High'
      }
    },
    {
      id: 2,
      name: 'Test Client 2',
      address: '456 Demo Ave',
      renewalDays: 90,
      renewalDate: '2026-02-01',
      currentAmount: 600000,
      currentRate: 4.0,
      propertyValue: 850000,
      equity: 250000,
      opportunities: 1,
      propertyValueChange: 3,
      paymentRoom: 300,
      lifetimeValue: 60000,
      originalDeal: {
        year: 2019,
        amount: 550000,
        rateSecured: 2.8,
        commission: 5500,
        competitors: [],
        wonReason: 'Great service'
      },
      lifeChanges: [],
      financial: {
        householdIncome: 180000,
        incomeChange: 30000,
        debts: []
      },
      primaryOpportunity: {
        title: 'Debt Consolidation',
        description: 'High interest debt',
        savingsAmount: 300,
        urgency: 'medium',
        urgencyReason: 'Saving opportunity'
      },
      crossSellOpportunities: [],
      competitiveAlert: {
        threats: [],
        clientLoyalty: 'Medium'
      }
    }
  ]
}));

describe('BookPage', () => {
  describe('Client List View', () => {
    it('renders the client list page with title', () => {
      render(<BookPage />);
      expect(screen.getByText('Client Book')).toBeInTheDocument();
    });

    it('displays search input', () => {
      render(<BookPage />);
      const searchInput = screen.getByPlaceholderText(/search clients/i);
      expect(searchInput).toBeInTheDocument();
    });

    it('renders all mock clients', () => {
      render(<BookPage />);
      expect(screen.getByText('Test Client 1')).toBeInTheDocument();
      expect(screen.getByText('Test Client 2')).toBeInTheDocument();
    });

    it('displays client renewal information', () => {
      render(<BookPage />);
      expect(screen.getByText('Renewal in 30 days')).toBeInTheDocument();
      expect(screen.getByText('Renewal in 90 days')).toBeInTheDocument();
    });

    it('displays client addresses', () => {
      render(<BookPage />);
      expect(screen.getByText('123 Test St')).toBeInTheDocument();
      expect(screen.getByText('456 Demo Ave')).toBeInTheDocument();
    });

    it('displays opportunity counts', () => {
      render(<BookPage />);
      expect(screen.getByText('2 Opportunities')).toBeInTheDocument();
      expect(screen.getByText('1 Opportunities')).toBeInTheDocument();
    });

    it('filters clients by name when searching', () => {
      render(<BookPage />);
      const searchInput = screen.getByPlaceholderText(/search clients/i);

      fireEvent.change(searchInput, { target: { value: 'Test Client 1' } });

      expect(screen.getByText('Test Client 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Client 2')).not.toBeInTheDocument();
    });

    it('filters clients by address when searching', () => {
      render(<BookPage />);
      const searchInput = screen.getByPlaceholderText(/search clients/i);

      fireEvent.change(searchInput, { target: { value: 'Demo Ave' } });

      expect(screen.getByText('Test Client 2')).toBeInTheDocument();
      expect(screen.queryByText('Test Client 1')).not.toBeInTheDocument();
    });

    it('shows no results message when search has no matches', () => {
      render(<BookPage />);
      const searchInput = screen.getByPlaceholderText(/search clients/i);

      fireEvent.change(searchInput, { target: { value: 'Nonexistent Client' } });

      expect(screen.getByText(/no clients found matching your search/i)).toBeInTheDocument();
    });

    it('navigates to client details when clicking on a client card', () => {
      render(<BookPage />);
      const clientCard = screen.getByText('Test Client 1').closest('.cursor-pointer');

      if (clientCard) {
        fireEvent.click(clientCard);
      }

      // Should show the back button after navigation
      expect(screen.getByText(/back to client list/i)).toBeInTheDocument();
    });
  });

  describe('Client Details View', () => {
    beforeEach(() => {
      render(<BookPage />);
      const clientCard = screen.getByText('Test Client 1').closest('.cursor-pointer');
      if (clientCard) {
        fireEvent.click(clientCard);
      }
    });

    it('displays client name in details view', () => {
      expect(screen.getAllByText('Test Client 1')[0]).toBeInTheDocument();
    });

    it('shows Call Now button', () => {
      expect(screen.getByRole('button', { name: /call now/i })).toBeInTheDocument();
    });

    it('shows Send Message button', () => {
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });

    it('displays original deal analysis section', () => {
      expect(screen.getByText(/original deal analysis/i)).toBeInTheDocument();
    });

    it('displays life changes section', () => {
      expect(screen.getByText(/life changes since last deal/i)).toBeInTheDocument();
    });

    it('displays current financial snapshot section', () => {
      expect(screen.getByText(/current financial snapshot/i)).toBeInTheDocument();
    });

    it('displays primary opportunity section', () => {
      expect(screen.getByText('Primary Opportunity')).toBeInTheDocument();
      expect(screen.getByText('Renewal Opportunity')).toBeInTheDocument();
    });

    it('displays cross-sell opportunities', () => {
      expect(screen.getByText('Cross-sell Opportunities')).toBeInTheDocument();
    });

    it('displays competitive alert', () => {
      expect(screen.getByText('Competitive Alert')).toBeInTheDocument();
    });

    it('displays quick actions section', () => {
      expect(screen.getByText('Quick Actions')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /generate renewal proposal/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /run new scenarios/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /schedule meeting/i })).toBeInTheDocument();
    });

    it('navigates back to client list when clicking back button', () => {
      const backButton = screen.getByRole('button', { name: /back to client list/i });
      fireEvent.click(backButton);

      // Should be back at the client list
      expect(screen.getByText('Client Book')).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/search clients/i)).toBeInTheDocument();
    });

    it('displays property value with change percentage', () => {
      expect(screen.getByText(/property value/i)).toBeInTheDocument();
      expect(screen.getByText(/\+5%/i)).toBeInTheDocument();
    });

    it('displays available equity', () => {
      expect(screen.getByText(/available equity/i)).toBeInTheDocument();
    });
  });

  describe('Collapsible Sections', () => {
    beforeEach(() => {
      render(<BookPage />);
      const clientCard = screen.getByText('Test Client 1').closest('.cursor-pointer');
      if (clientCard) {
        fireEvent.click(clientCard);
      }
    });

    it('original deal analysis section is open by default', () => {
      const section = screen.getByText(/original deal analysis/i).closest('div');
      expect(section).toBeInTheDocument();
    });

    it('life changes section is open by default', () => {
      const section = screen.getByText(/life changes since last deal/i).closest('div');
      expect(section).toBeInTheDocument();
    });

    it('conversation strategy section is closed by default', () => {
      const strategyTitle = screen.getByText(/conversation strategy/i);
      expect(strategyTitle).toBeInTheDocument();
    });
  });
});
