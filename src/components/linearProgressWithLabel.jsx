export function LinearProgressWithLabel(props) {
  return (
    <div className="fixed inset-0">
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="mx-auto w-full max-w-md">
          <div className="flex items-center px-4 py-3">
            <div className="w-full">
              <div className="text-md text-white"> Loading ... </div>
              <div className="h-2 rounded-full bg-gray-800">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{ width: `${props.value}%` }}
                ></div>
              </div>
            </div>
            <div className="ml-4">
              <div className="text-sm font-semibold text-gray-100">
                {`${Math.round(props.value)}%`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
