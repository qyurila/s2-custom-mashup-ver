import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

const IntroDialog = ({ isActive }: { isActive: boolean }) => {
	const [isOpen, setIsOpen] = useState(true)

	function closeModal() {
		setIsOpen(false)
	}

	return (
		<>
			<Transition appear show={isActive && isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										S2합작 커스텀 매시업버젼
									</Dialog.Title>
									<div className="mt-2">
										<p className="font-sans text-sm text-gray-500">
											각 영상을 드래그해서 순서를 바꿀 수 있습니다.
											<br />
											+버튼을 눌러서 매시업할 영상을 추가하거나
											삭제해보세요.
											<br />
											기타 문제가 생기면 새로고침을 눌러주세요.
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											닫기
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default IntroDialog
