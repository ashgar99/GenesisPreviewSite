import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Check, X, Minus } from 'lucide-react';
import { clsx } from 'clsx';

type CellValue = boolean | 'partial' | string;

interface ComparisonTableProps {
  label?: string;
  headline: string;
  columns: string[];
  rows: Array<{
    feature: string;
    values: CellValue[];
  }>;
  highlightColumn?: number;
}

function CellContent({ value }: { value: CellValue }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-success-500 mx-auto" />;
  }
  if (value === false) {
    return <X className="h-5 w-5 text-neutral-300 mx-auto" />;
  }
  if (value === 'partial') {
    return <Minus className="h-5 w-5 text-warning-500 mx-auto" />;
  }
  return <span className="text-body-sm text-neutral-600">{value}</span>;
}

export function ComparisonTable({
  label = 'Comparison',
  headline,
  columns,
  rows,
  highlightColumn = 0,
}: ComparisonTableProps) {
  return (
    <section className="section bg-white">
      <Container size="lg">
        <div className="text-center mb-12">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="font-display text-display-lg text-neutral-900 text-balance">
            {headline}
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 text-body-sm font-semibold text-neutral-500 uppercase tracking-wider">
                  Feature
                </th>
                {columns.map((column, index) => (
                  <th
                    key={column}
                    className={clsx(
                      'p-4 text-body-md font-semibold text-center',
                      index === highlightColumn
                        ? 'bg-brand-50 text-brand-600'
                        : 'text-neutral-700'
                    )}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={row.feature}
                  className={clsx(
                    rowIndex % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                  )}
                >
                  <td className="p-4 text-body-md text-neutral-800">
                    {row.feature}
                  </td>
                  {row.values.map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className={clsx(
                        'p-4 text-center',
                        colIndex === highlightColumn && 'bg-brand-50/50'
                      )}
                    >
                      <CellContent value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {columns.map((column, colIndex) => (
            <div
              key={column}
              className={clsx(
                'rounded-xl p-6',
                colIndex === highlightColumn
                  ? 'bg-brand-50 ring-2 ring-brand-500'
                  : 'bg-neutral-50'
              )}
            >
              <h3 className="font-display text-heading-lg text-neutral-900 mb-4">
                {column}
              </h3>
              <ul className="space-y-3">
                {rows.map((row) => {
                  const value = row.values[colIndex];
                  const isPositive = value === true || value === 'partial';

                  return (
                    <li
                      key={row.feature}
                      className="flex items-center gap-3 text-body-sm"
                    >
                      <CellContent value={value} />
                      <span
                        className={clsx(
                          isPositive ? 'text-neutral-800' : 'text-neutral-400'
                        )}
                      >
                        {row.feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
