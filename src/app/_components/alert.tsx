import Container from '@/app/_components/container';
import { EXAMPLE_PATH } from '@/lib/constants';
import cn from 'classnames';

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b dark:bg-slate-800', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              Atlas.co lands $2m to battle the 50-year old mapping giant Esri.{' '}
              <a
                href={`https://atlas.co/blog/atlas-co-raises-2-m-pre-seed/`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                Read more
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
