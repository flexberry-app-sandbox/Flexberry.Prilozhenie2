﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie_2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Препод.
    /// </summary>
    // *** Start programmer edit section *** (Препод CustomAttributes)

    // *** End programmer edit section *** (Препод CustomAttributes)
    [AutoAltered()]
    [Caption("Преподаватель")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПреподE", new string[] {
            "ФИОПрепода as \'Препод\'"})]
    [View("ПреподL", new string[] {
            "ФИОПрепода as \'Препод\'"})]
    public class Препод : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИОПрепода;
        
        // *** Start programmer edit section *** (Препод CustomMembers)

        // *** End programmer edit section *** (Препод CustomMembers)

        
        /// <summary>
        /// ФИОПрепода.
        /// </summary>
        // *** Start programmer edit section *** (Препод.ФИОПрепода CustomAttributes)

        // *** End programmer edit section *** (Препод.ФИОПрепода CustomAttributes)
        [StrLen(255)]
        public virtual string ФИОПрепода
        {
            get
            {
                // *** Start programmer edit section *** (Препод.ФИОПрепода Get start)

                // *** End programmer edit section *** (Препод.ФИОПрепода Get start)
                string result = this.fФИОПрепода;
                // *** Start programmer edit section *** (Препод.ФИОПрепода Get end)

                // *** End programmer edit section *** (Препод.ФИОПрепода Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Препод.ФИОПрепода Set start)

                // *** End programmer edit section *** (Препод.ФИОПрепода Set start)
                this.fФИОПрепода = value;
                // *** Start programmer edit section *** (Препод.ФИОПрепода Set end)

                // *** End programmer edit section *** (Препод.ФИОПрепода Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПреподE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПреподE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПреподE", typeof(IIS.Prilozhenie_2.Препод));
                }
            }
            
            /// <summary>
            /// "ПреподL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПреподL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПреподL", typeof(IIS.Prilozhenie_2.Препод));
                }
            }
        }
    }
}
