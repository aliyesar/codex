import { useSubmissions } from '@hooks/data/useSubmissions';
import { SubmissionStatus } from '@models/enums';
import { cx } from 'class-variance-authority';
import { DateTime } from 'luxon';
import { FC } from 'react';

type SubmissionsProps = {
  problemId: string;
};

const Submissions: FC<SubmissionsProps> = ({ problemId }) => {
  const { submissions } = useSubmissions(problemId);
  return (
    <div className="flex flex-1 flex-col">
      {submissions?.map(({ id, status, date, runtime, memory }) => {
        const accepted = status == SubmissionStatus.Accepted;
        return (
          <div className="w-full border-b p-2" key={id}>
            <div className={cx('text-lg ', accepted ? 'text-success' : 'text-error')}>
              {accepted ? 'Accepted' : 'Wrong Answer'}
            </div>
            <div className="mt-1 text-xs text-secondary-200">
              {DateTime.fromISO(date).toFormat('dd LLL yyyy')} • {runtime} ms • {memory} KB
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Submissions;