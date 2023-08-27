// 'use client'
// import { Transition } from '@headlessui/react'
// import { Fragment, ReactNode } from 'react'

// type ModalProps = {
//   children: ReactNode
//   isModalVisible: boolean
//   onClose: () => void
//   className?: string
// }

// export function ModalBase({
//   children,
//   isModalVisible,
//   onClose,
//   className = '',
// }: ModalProps) {
//   return (
//     <>
//       <Transition appear show={isModalVisible} as={Fragment}>
//         {/* <Dialog as="div" className="relative z-10" onClose={onClose}> */}
//         <div className="fixed inset-0 overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center bg-black bg-opacity-60 p-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               {/* <Dialog.Panel
//                 className={
//                   'w-full max-w-2xl p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'
//                 }
//               > */}
//               {children}
//               {/* </Dialog.Panel> */}
//             </Transition.Child>
//           </div>
//         </div>
//         {/* </Dialog> */}
//       </Transition>
//     </>
//   )
// }
